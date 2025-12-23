---
title: "Creating a custom block in Drupal 8"
date: 2014-09-06
slug: "custom-block-drupal-8"
summary: "Learn how to create custom blocks in Drupal 8 using the new plugin system and block entities."
tags: ["drupal", "block", "custom-modules"]
author: "Sharique"
status: "published"
seo:
  description: "Complete guide to creating custom blocks in Drupal 8 with the new plugin system"
  keywords: ["Drupal 8", "Custom Blocks", "Plugins"]
---

Block is a very basic building block of any site. Blocks in Drupal 8 are very different from what we are using in d7. In D8 blocks are plugins (like ctool content type plugin) and also an entity. One more major improvement from site builder is that now you can have more than one instance of a block on the same page, all instances can have a different configuration, which was a nightmare in d7. In d7 to achieve this, you have to use either use panels or delta + context modules. Even in this way you can’t have a different configuration for each instance. By creating mini panels you can have different configuration for each mini panel, which makes page heavy and it will be slower to load. Now you can do this easily without using any contrib module. Creating custom block using code is much easier in D8 as compared to D7. All that you have to do is create a class using BlockBase as the base in “my_module/src/Plugin/Block” and implement at build function, which is for the building block. If you look closely at the path, you will realize that you’re creating a new Block type plugin. The code of for creating is as follows

```
namespace Drupal\mymodule\Plugin\Block;
use Drupal\block\BlockBase;

/**
 * Provides a 'test empty block' block.
 *
 * @Block(
 *   id = "test_empty",
 *   subject = @Translation("test: empty block"),
 *   admin_label = @Translation("test: empty block")
 * )
 */
class MyBlock extends BlockBase {
  public function build() {
    $config = $this->getConfiguration();
    return array(
      '#type'=>'markup',
      '#markup'=>t('This is test block : '). $config['test_field1'],
      '#title'=>t('test block title'),
    );
  }

  /**
   * {@inheritdoc}
   */
  public function blockForm($form, &amp;$form_state) {
    $form = parent::blockForm($form, $form_state);
    //Retrieve existing configuration for this block.
    $config = $this->getConfiguration();

    $form['test_field1']=array(
      '#type'=>'textfield',
      '#title'=>t('Block setting'),
      '#default_value' =>isset($config['test_field1']) ? $config['test_field1'] : '',
    );
    return $form;
  }
}
```

The first line tells the namespace of the newly created block class. Second-line is to include the base class (BlockBase in case of the block).

```
namespace Drupal\mymodule\Plugin\Block;
use Drupal\block\BlockBase;
```
Next comes YAML annotation to describe the new block. At lease id is required here if you do not provide the id, drupal will not be able to recognize block correctly.
```
/**
 * Provides a 'test empty block' block.
 *
 * @Block(
 *   id = "test_empty",
 *   subject = @Translation("test: empty block"),
 *   admin_label = @Translation("test: empty block")
 * )
 */
 ```
Next comes the block class. I’ve implemented only 2 methods here, build and blockForm. The build method is the heart of the block, it returns the markup of the block in an array format. Method buildForm is for configuration form of the block. Here I’ve defined only one text field, the value entered will be displayed on the block. I am doing this to show that each block instance will separate configuration. Method getConfiguration is used to retrieve the saved configuration of the block. Did you noticed that there is no form_submit, you don’t need to a submit method to save the configuration if you are doing some processing then you need one. Method for submitting is blockSubmit. Note:- Drupal 8 is still in development, so API might change.
