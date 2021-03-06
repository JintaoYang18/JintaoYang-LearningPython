---
sidebar: auto
next: /config/cop
---

# æå


## ä»ç» ð

> Pythonç±è·å°æ°å­¦åè®¡ç®æºç§å­¦ç ç©¶å­¦ä¼çåå¤Â·èç½èå§ äº1990 å¹´ä»£åè®¾è®¡ï¼ä½ä¸ºä¸é¨å«åABCè¯­è¨çæ¿ä»£åã Pythonæä¾äºé«æçé«çº§æ°æ®ç»æï¼è¿è½ç®åææå°é¢åå¯¹è±¡ç¼ç¨ãPythonè¯­æ³åå¨æç±»åï¼ä»¥åè§£éåè¯­è¨çæ¬è´¨ï¼ä½¿å®æä¸ºå¤æ°å¹³å°ä¸åèæ¬åå¿«éå¼ååºç¨çç¼ç¨è¯­è¨ï¼éççæ¬çä¸æ­æ´æ°åè¯­è¨æ°åè½çæ·»å ï¼éæ¸è¢«ç¨äºç¬ç«çãå¤§åé¡¹ç®çå¼åã

![å­¦ä¹ Python](./assets/python-logo-master-v3-TM.png)

å­¦ä¹  Python.


## å®è£ ð©

ç¥ã

## ä¾èµç¯å¢ç­ ð¹ï¸

ç¥ã

## ä½¿ç¨ ð

ææ¡å°ä¸å®å¨ï¼æ­¤å¤è¿ä¸ä¼æ¢³çç®å½æ¶æï¼æ³å°åªåå°åªã

### sys.stdout = file æ¥å¿è®°å½ ð

Python æ åè¾åº `sys.stdout` éå®å ï¼*ä»æ§å¶å°éå®åå°æä»¶*ï¼

åå§ç sys.stdout æåæ§å¶å°ï¼å¦æææä»¶çå¯¹è±¡çå¼ç¨èµç» `sys.stdout`ï¼é£ä¹ `print` è°ç¨çå°±æ¯æä»¶å¯¹è±¡ç `write` æ¹æ³ï¼

```python
import os
import sys

f_handler=open('out.log', 'w')
sys.stdout=f_handler
print 'hello' 
# è¿ä¸ª hello ä¸è½å¨æ§å¶å°æ¥ç
# è¿ä¸ª hello å¨æä»¶ out.log ä¸­
```

### æ¶é´æ³ ð¡ï¸

```python
from datetime import datetime

# ç°å¨æ¶é´-æ ¼å¼å
datetime.now().strftime('%Y-%m-%d-%H:%M:%S')
# æå°ç°å¨æ¶é´
print(datetime.now())
```

### ç®å½ææ å¤æ­åæ°å»º ð
```python
import os

# å¤æ­ææ 
if not os.path.exists(save_dir):
  # æ°å»ºç®å½
  os.makedirs(save_dir)
```

### argparse åæ°ä¼ å¥ âï¸
```python
import argparse

parser = argparse.ArgumentParser(description='Python')
parser.add_argument('-sd', '--save-dir', default='./results', help='path to save')
args = parser.parse_args()
  
main(args)
```

### å¤å¡è®­ç» ð¥ð¥ð¥ð¥

`torch.nn.DataParallel`å¤å¡è®­ç»ï¼å¯è½ä¼å½±åæ§è½åå¯å¤ç°æ§ï¼è°¨æä½¿ç¨ã

```python
# torch.nn.DataParallel
device_ids = [0, 1]
net = torch.nn.DataParallel(net, device_ids=device_ids)
```
[åè1:ç¥ä¹](https://zhuanlan.zhihu.com/p/102697821)

[åè2:é®é¢](https://www.zhihu.com/pin/1324807219972300800)

### Torchå éè®­ç»GPU â©ï¸

`torch.backends.cudnn.benchmark = True`å°ä¼è®©ç¨åºå¨å¼å§æ¶è±è´¹ä¸ç¹é¢å¤æ¶é´ï¼ä¸ºæ´ä¸ªç½ç»çæ¯ä¸ªå·ç§¯å±æç´¢æéåå®çå·ç§¯å®ç°ç®æ³ï¼è¿èå®ç°ç½ç»çå éã

éç¨åºæ¯æ¯**ç½ç»ç»æåºå®ï¼ä¸æ¯å¨æååçï¼ï¼ç½ç»çè¾å¥å½¢ç¶ï¼åæ¬ batch sizeï¼å¾çå¤§å°ï¼è¾å¥çééï¼æ¯ä¸åç**ï¼å¶å®ä¹å°±æ¯ä¸è¬æåµä¸é½æ¯è¾éç¨ã

åä¹ï¼å¦æå·ç§¯å±çè®¾ç½®ä¸ç´ååï¼å°ä¼å¯¼è´ç¨åºä¸åå°åä¼åï¼åèä¼èè´¹æ´å¤çæ¶é´ã

```python
if args.use_gpu and torch.cuda.is_available():
    device = torch.device('cuda')
    torch.backends.cudnn.benchmark = True # ä¸è¬å å¨å¼å¤´
else:
    device = torch.device('cpu')
```

[åè:ç¥ä¹](https://zhuanlan.zhihu.com/p/73711222)

### print å¨ææå° ð¨ï¸

å®ç°åå°è¾åºå¨æè¿åº¦ã

```python
import time
for i in range(50):
    print("Loading" + "."*i, end="\r")
    time.sleep(0.1)
print("")
```

### PyTorch model.train() â¹ââï¸

```python
model.train():
# å¨ä½¿ç¨pytorchæå»ºç¥ç»ç½ç»çæ¶åï¼è®­ç»è¿ç¨ä¸­ä¼å¨ç¨åºä¸æ¹æ·»å ä¸å¥model.train()ï¼ä½ç¨æ¯å¯ç¨batch normalizationådrop outã
model.eval():
# æµè¯è¿ç¨ä¸­ä¼ä½¿ç¨model.eval()ï¼è¿æ¶ç¥ç»ç½ç»ä¼æ²¿ç¨batch normalizationçå¼ï¼å¹¶ä¸ä½¿ç¨drop outã
```

### assert æ­è¨ âï¸

è¿ä¸ä¼

### YAMLæä»¶çè¯»å ð

è¿ä¸ä¼

<!-- 
**Required**:
Check out [frontmatter](config/front-matter) for more details.
1. [Writing the summary manually in frontmatter](./front-matter.md#summary)
:::warning
However, it's still a convenient tool to help you scaffold out a new project with a set of predefined templates.
::: -->

### Pytorch .pth ä¿å­æ°æ® ð¾

```python
i=1
for ... :
  if i == 1 :
      x_save_pt = out_resize_tensor #torch.from_numpy(out_display_img1).unsqueeze(0)
      y_save_pt = test_labels
  else :
      x_save_pt = torch.cat([x_save_pt, out_resize_tensor], dim=0) #x_save_pt = torch.cat([x_save_pt, torch.from_numpy(out_display_img1).unsqueeze(0)], dim=0)
      y_save_pt = torch.cat([y_save_pt, test_labels], dim=0)
  i = i+1

torch.save({'data': x_save_pt, 'target': y_save_pt}, "./12_googlenet_" + Atk_Type + ".pt")
```

### Pytorch æ°æ®ä¹é´è½¬æ¢ ð

**1. PIL, Numpy to Tensor**

```python
import torchvision.transforms as transforms
x_Tensor = transforms.ToTensor()(x_PIL).unsqueeze(0)
x_Tensor = transforms.ToTensor()(x_Numpy).unsqueeze(0)
```

**2. Tensor to PIL**

```python
import torchvision.transforms as transforms

unloader = transforms.ToPILImage()

def trans_image(tensor):
    image = tensor.cpu().clone()
    image = image.squeeze(0)
    image = unloader(image)
    image = image.resize((299, 299), Image.ANTIALIAS) # ç¼©æ¾
    return image

x_PIL = trans_image(x_Tensor)
```

**3. PIL to Numpy**

```python
x_Numpy = numpy.array(x_PIL, dtype = numpy.float32) # æ°æ®ç±»å
```

### Pytorch Tensoræ°æ®ç»´åº¦äº¤æ¢ â

```python
b = a.permute(0, 3, 1, 2)
```

### Shell èæ¬ ð

```bash
for TYPE in clean adv
do
    echo  "TYPE:  ${TYPE}"
    python googlenet.py --data_test Demo --scale 2 --pre_train download --test_only --save_results --type ${TYPE}
    python eval_googlenet.py --atk-type ${TYPE} --test-batch-size 64  --date 20220316
done
```

### Shell èæ¬-å¸¦è¿è¡æ¶é´è®°å½ ðð¡ï¸

```bash
starttime=`date +'%Y-%m-%d %H:%M:%S'`
echo "Shell_Start_Time :            "$starttime

#sleep 1m
#sleep 1s

endtime=`date +'%Y-%m-%d %H:%M:%S'`
echo "Shell_End_Time :              "$endtime
time1=$(($(date +%s -d "$endtime") - $(date +%s -d "$starttime")));
echo " "
echo "Total_Shell_Time :            "   $(($time1/60/60/24)) "days  " $(($time1/60/60)) "hours  " $(($time1/60)) "minutes  " $(($time1%60)) "seconds"
echo " "
```

### Normalizationçæ°å¨æ±è§£Torchä¿å­ â

```python
import torch

unloader = transforms.ToPILImage()

perturb = (img_fgm - img)
p_min = torch.min(perturb)
p_max = torch.max(perturb)
normal_p = (perturb + p_min) / (p_max - p_min)
normal_p = torch.squeeze(normal_p, dim=0)
normal_p = unloader(normal_p)
name = 'adv_perturb.bmp'
normal_p.save('./fgsm_test/' + name)
```

### MarkDown åç®å½ï¼å¸¦è·³è½¬ âªï¸

ä¸è½å¸¦ç©ºæ ¼

```markdown
# ç®å½

- [è®ºæè§£è¯»](#è®ºæè§£è¯»)
  - [III. é²å¾¡æ¨¡å](#III_é²å¾¡æ¨¡å)
    - [A. Image Reconstruction Network](#A_Image_Reconstruction_Network)
      - [æ®å·®å](#æ®å·®å)
      - [éæºåå±](#éæºåå±)
    - [B. Perceptual Loss](#B_Perceptual_Loss)
  - [IV. å®éª](#IV_å®éª)
    - [A. Preparation](#A_Preparation)
      - [ç®æ æ¨¡å](#ç®æ æ¨¡å)
      - [æ»å»æ¹æ³](#æ»å»æ¹æ³)
      - [æ°æ®é](#æ°æ®é)
      - [å®æ½ç»è](#å®æ½ç»è)
- [ä»£ç è¿è¡](#ä»£ç è¿è¡)
  - [è¿å¥ç®å½](#è¿å¥ç®å½)
- [åèæç®](#åèæç®)
```

### pdbè°è¯å¨ ð¨ð»âð»

- ENTER (éå¤ä¸æ¬¡å½ä»¤)
- c (ç»§ç»­)
- l (æ¥æ¾å½åä½äºåªé)
- s (è¿å¥å­ç¨åº,å¦æå½åæä¸ä¸ªå½æ°è°ç¨ï¼é£ä¹ s ä¼è¿å¥è¢«è°ç¨çå½æ°ä½)
- n(ext) è®©ç¨åºè¿è¡ä¸ä¸è¡ï¼å¦æå½åè¯­å¥æä¸ä¸ªå½æ°è°ç¨ï¼ç¨ n æ¯ä¸ä¼è¿å¥è¢«è°ç¨çå½æ°ä½ä¸­ç
- r (è¿è¡ç´å°å­ç¨åºç»æ)
- !<python å½ä»¤>
- h (å¸®å©)
- a(rgs) æå°å½åå½æ°çåæ°
- j(ump) è®©ç¨åºè·³è½¬å°æå®çè¡æ°
- l(ist) å¯ä»¥ååºå½åå°è¦è¿è¡çä»£ç å
- p(rint) ææç¨çå½ä»¤ä¹ä¸ï¼æå°æä¸ªåé
- q(uit) éåºè°è¯
- r(eturn) ç»§ç»­æ§è¡ï¼ç´å°å½æ°ä½è¿å

```python
import pdb

pdb.set_trace()
```

### PyTorch-N_DataLoader-ååºè®­ç» âï¸

- è¯»åDataLoader, è®¾å®generator

```python
def data_loader_folder(samples_dir: str,
                       b_s: int = 1,
                       shuffle_bi: bool = False,
                       n_workers: int = 0,
                       ran_num: int = 1) -> Data.DataLoader:
    data_transform = transforms.Compose([
        ......
        transforms.ToTensor()
    ])
    train_data = Datasets.ImageFolder(root=samples_dir, 
                                      transform=data_transform)
    g = torch.Generator()
    g.manual_seed(ran_num)
    train_data_loader = Data.DataLoader(train_data, 
                                        batch_size=b_s, 
                                        shuffle=shuffle_bi,
                                        num_workers=n_workers, 
                                        generator=g)
    return train_data_loader
```

- æ¯ä¸ªepochï¼äº§çä¸åéæºæ°ï¼ä¼ ç»DataLoaderä¸­çgenerator

```python
def data_loader_hook(dir2, dir3, batch_size1, epoch):
    rdx = random.randint(1, 100)
    loaders1 = data_loader_folder(dir2, 
                                  b_s=batch_size1, 
                                  shuffle_bi=True, 
                                  n_workers=1, 
                                  ran_num=rdx)
    loaders2 = data_loader_folder(dir3, 
                                  b_s=batch_size1, 
                                  shuffle_bi=True, 
                                  n_workers=1, 
                                  ran_num=rdx)
    return loaders1, loaders2
```

- N_DataLoaderè®­ç»-zip-zip(*)è¯»å

```python
for epoch in range(start_epoch, end_epoch):
    data_loader1, data_loader2 = data_loader_hook(dir4, 
                                                  dir5, 
                                                  batch_size1, 
                                                  epoch)
    model.train()
    for num_batches, data_fuse in enumerate(zip(data_loader1, data_loader2)):
        load_img, load_lab = zip(*data_fuse)
        images_adv, images_clean = load_img
        target_adv, target_clean = load_lab
```

### cmdå®æ¶å·æ°è¡åå®¹ ð¥ï¸
èèä»¥ä¸ç®åçPythonèæ¬ï¼
```python
import time
import sys
for i in range(5):
  print(i),
  #sys.stdout.flush()
  time.sleep(1)
```
è¿æ¯ä¸ºäºæå°æ¯ç§äºç§éä¸ä¸ªå·ç ï¼ä½ è¦æ¯è·ä¸è¿å®ï¼å ä¸ºå®æ¯ç°å¨ï¼åå³äºé»è®¤çç³»ç»ç¼å­ï¼ï¼ä½ å¯è½çä¸å°ä»»ä½è¾åºï¼ç´å°èæ¬å®æï¼ç¶åä¸ä¸å­ä½ ä¼çå°0 1 2 3 4å°å°å±å¹ãè¿æ¯å ä¸ºè¾åºæ­£å¨ç¼å²ä¸­ï¼é¤ésys.stdoutæ¯æ¬¡å·æ°åprintæ¨é½ä¸ä¼ç«å³çå°è¾åºãä»sys.stdout.flush()è¡ä¸­å é¤æ³¨éä»¥æ¥çåºå«ã

```python
import sys
import time
# å¨åä¸è¡å·æ° Print()
sys.stdout.write('\r')
sys.stdout.write('| Type [%s] : Acc:%f \t\t' %(at_tp, acc))
sys.stdout.flush()
print(time.time()) # å è¿ä¸è¡å°±ä¼ä¸è¡ä¸è¡æ¥çå·æ°
        
# è®­ç»æ¶å®æ¶æ¾ç¤ºæ¯ä¸ªepoch,iter,lossçç»è®¡æ°æ®
sys.stdout.write('\r')
sys.stdout.write('| Epoch [%3d/%3d] Iter[%3d/%3d] : Loss:%f \t\t'
        %(epoch, MAX_EPOCHS, counter,
            (train_size/TRAIN_BATCH_SIZE),cost.data.cpu().numpy()))
end=time.time()
print('Epoch:',epoch,' Time taken:',(end-start))
```

### Excel è¡ååéåå¼èµå¼ï¼ç¨æ¥å¤çå®éªæ°æ®ï¼ð

```xls
=INDIRECT(ADDRESS((ROW()*2+1),10))

=INDIRECT(ADDRESS(ROW(),COLUMN()))
```

## æå ð

é¡ºé¡ºå©å©ï¼å¤å­¦å¤ç¨ã
<!-- Now, Check out your blog at `localhost:8080`, if everything is ok, you might be interested in the following topics:

- Configure this theme: We'll discuss in [the next section](../config) -->
